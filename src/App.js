import React, { useState, useEffect, useContext, useMemo } from "react";

import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import _sortBy from "lodash/sortBy";
import _values from "lodash/values";
import _reverse from "lodash/reverse";
import _head from "lodash/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import Loader from "./components/Loader/Loader";
import Login from "./components/Login";
import Header from "./components/Header";
import CreateCampaignForm from "./components/CreateCampaignForm";
import { database } from "./configs/firebaseConfig";
import {
  filterSidebarDataBySubdomain,
  getSubdomain,
  getUndeletedCampaigns,
} from "./utils/common.utils";
import AuthContext from "./contexts/AuthContext";
import {
  FEED,
  PAGES,
  PARTNER,
  PARTY_KEYS,
  SIDEBAR_MENU_ITEMS,
} from "./constants/common";
import Billing from "./pages/Billing";
import Home from "./pages/home";
import Contact from "./pages/Contact";

// import { createCampaign } from "./utils/firebase.utils";
// import { createCampaign } from "./utils/firebase.utils";

// const getLevelKeys = (items1) => {
//   const key = {};
//   const func = (items2, level = 1) => {
//     items2.forEach((item) => {
//       if (item.key) {
//         key[item.key] = level;
//       }
//       if (item.children) {
//         func(item.children, level + 1);
//       }
//     });
//   };
//   func(items1);
//   return key;
// };
// const levelKeys = getLevelKeys(SIDEBAR_MENU_ITEMS);

function App() {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState("HOME");
  const [selectedMenuItem, setSelectedMenuItems] = useState([PAGES.DASHBOARD]);
  // const [stateOpenKeys] = useState([PAGES.DASHBOARD, FEED.GOOGLE]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCreateCampaignModal, setShowCreateCampaignModal] = useState(false);
  const [subDomain, setSubDomain] = useState(getSubdomain());

  useEffect(() => {
    let unsubscribe = () => {};
    if (user && !subDomain) {
      setLoading(true);
      const campaignsRef = query(ref(database, "campaigns"));
      unsubscribe = onValue(campaignsRef, (snapshot) => {
        const campaignsResponse = snapshot.val();
        setData(
          getUndeletedCampaigns(
            _sortBy(_values(campaignsResponse), "createdAt"),
          ),
        );
        setLoading(false);
      });
    }
    return unsubscribe;
  }, [user, subDomain]);

  useEffect(() => {
    let unsubscribe = () => {};
    if (user && subDomain) {
      setLoading(true);
      const campaignsRef = query(
        ref(database, "campaigns"),
        orderByChild("party"),
        equalTo(subDomain),
      );
      unsubscribe = onValue(campaignsRef, (snapshot) => {
        const campaignsResponse = snapshot.val();
        const undeletedCampaigns = getUndeletedCampaigns(
          _sortBy(_values(campaignsResponse), "createdAt"),
        );
        setData(undeletedCampaigns);
        setLoading(false);
      });
    }
    return unsubscribe;
  }, [user, subDomain]);

  const openCreateCampaignModal = () => {
    setShowCreateCampaignModal(true);
  };

  const closeCreateCampaignModal = () => {
    setShowCreateCampaignModal(false);
  };

  const sidebarItems = useMemo(() => {
    return filterSidebarDataBySubdomain(subDomain);
  }, [subDomain]);

  if (!user) {
    if (page === "HOME") {
      return (
        <Home
          onLoginPress={() => setPage("LOGIN")}
          onSignupPress={() => setPage("CONTACT")}
        />
      );
    }

    if (page === "CONTACT") {
      return <Contact />;
    }
    if (page === "LOGIN") {
      return <Login />;
    }
  }

  const onOpenChange = (openKeys) => {
    setSelectedMenuItems(_reverse(openKeys?.keyPath ?? []));
  };

  const selectedMenu = _head(selectedMenuItem);

  return (
    <div
      style={{ maxHeight: "100vh", maxWidth: "100vw" }}
      className="flex flow-root items-start h-full"
    >
      <Header />
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div
          style={{
            maxWidth: "100%",
            maxHeight: "calc(100vh - 64px)",
            height: "calc(100vh - 64px)",
          }}
          className="flex items-start h-full "
        >
          {/* <button onClick={addData} type="button">
            add data
          </button> */}
          <CreateCampaignForm
            modalVisible={showCreateCampaignModal}
            onClose={closeCreateCampaignModal}
            subDomain={subDomain}
          />

          <Sidebar
            subDomain={subDomain}
            menuItems={sidebarItems}
            onMenuSelection={onOpenChange}
            selectedMenuItem={selectedMenuItem}
          />
          <div
            className="p-3 h-full overflow-scroll grow"
            style={{ backgroundColor: "rgb(244, 247, 248)" }}
          >
            {selectedMenu === PAGES.DASHBOARD && (
              <Dashboard allData={data} selectedOptions={selectedMenuItem} />
            )}
            {selectedMenu === PAGES.CAMPAIGNS && (
              <Campaigns
                campaigns={data}
                openCreateCampaignModal={openCreateCampaignModal}
              />
            )}
            {selectedMenu === PAGES.REPORTS && <Reports campaigns={data} />}
            {selectedMenu === PAGES.SETTINGS && (
              <Settings subDomain={subDomain} />
            )}
            {selectedMenu === PAGES.BILLING && <Billing />}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
