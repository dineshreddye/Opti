import React, { useState, useEffect, useContext } from "react";

import {
  FileTextOutlined,
  HomeOutlined,
  SoundOutlined,
} from "@ant-design/icons";

import { onValue, query, ref } from "firebase/database";
import _sortBy from "lodash/sortBy";
import _values from "lodash/values";

import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Reports from "./pages/Reports";

import Loader from "./components/Loader/Loader";
import Login from "./components/Login";
import Header from "./components/Header";
import CreateCampaignForm from "./components/CreateCampaignForm";
import { database } from "./configs/firebaseConfig";
import { getUndeletedCampaigns } from "./utils/common.utils";
import AuthContext from "./contexts/AuthContext";

const SIDEBAR_MENU_ITEMS = [
  {
    key: 1,
    label: "Dashboard",
    icon: HomeOutlined,
  },
  {
    key: 2,
    label: "Campaigns",
    icon: SoundOutlined,
  },
  {
    key: 3,
    label: "Reports",
    icon: FileTextOutlined,
  },
];

function App() {
  const { user } = useContext(AuthContext);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCreateCampaignModal, setShowCreateCampaignModal] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setIsAuthenticated(true);
  //     } else {
  //       setIsAuthenticated(false);
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    let unsubscribe = () => {};
    if (user) {
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
  }, [user]);

  const openCreateCampaignModal = () => {
    setShowCreateCampaignModal(true);
  };

  const closeCreateCampaignModal = () => {
    setShowCreateCampaignModal(false);
  };

  if (!user) {
    return <Login />;
  }

  return (
    <div
      style={{ maxHeight: "100vh", maxWidth: "100vw" }}
      className="flex flow-root items-start h-full"
    >
      <Loader loading={loading} />

      <Header />
      <div
        style={{
          maxWidth: "100%",
          maxHeight: "calc(100vh - 64px)",
          height: "calc(100vh - 64px)",
        }}
        className="flex items-start h-full "
      >
        <CreateCampaignForm
          modalVisible={showCreateCampaignModal}
          onClose={closeCreateCampaignModal}
        />
        <Sidebar
          menuItems={SIDEBAR_MENU_ITEMS}
          onMenuSelection={setSelectedMenuItem}
          selectedMenuItem={[selectedMenuItem]}
        />
        <div
          className="p-3 h-full overflow-scroll grow"
          style={{ backgroundColor: "rgb(244, 247, 248)" }}
        >
          {selectedMenuItem === "1" && <Dashboard allData={data} />}
          {selectedMenuItem === "2" && (
            <Campaigns
              campaigns={data}
              openCreateCampaignModal={openCreateCampaignModal}
            />
          )}
          {selectedMenuItem === "3" && <Reports campaigns={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
