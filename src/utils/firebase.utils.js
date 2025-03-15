import { ref, set } from "firebase/database";
import moment from "moment";
import { v4 as uuid } from "uuid";

import { toast } from "react-toastify";
import { database } from "../configs/firebaseConfig";
import { STATUS } from "../constants/common";

export const createCampaign = async (campaignInfo, subDomain) => {
  // x = {
  //   feedSelection: "Google",
  //   partner: "Bigpipes",
  //   campaignName: "12345",
  //   adSetName: "asdf",
  //   adName: "234",
  //   trafficSource: "Native",

  //   objective: "Traffic",
  //   dailyBudget: "12345",
  //   targetCPA: "12344",
  //   targetCountry: ["Afghanistan", "Albania"],
  //   createVariations: true,
  //   trafficSourceOption: "Outbrain",
  // optimizeKeywords: "asdfgh",
  //   adSetting: "Manual",
  //   headline1: "12345",
  //   headline2: "1234",
  //   description: "12345",
  //   brandName: "1234",
  //   uploader: "AI+",
  // };

  const {
    campaignName,
    adSetName: adSet,
    adName,
    trafficSourceOption: trafficeSource,
    trafficSource: trafficSourceOption,
    adAccount = "",
    dailyBudget: budget,
    partner,
    feedSelection: feed,
    adSetting,
    headline1 = "",
    headline2 = "",
    description = "",
    brandName = "",
    uploader = "",
    targetCPA,
    optimizeKeywords,
    targetCountry,
    objective,
    createVariations,
    party,
  } = campaignInfo;

  const id = uuid();

  const campaignPayload = {
    createdAt: moment().valueOf(),
    isDeleted: false,
    id,
    date: moment().format("DD-MM-YYYY"),
    campaignName,
    adSet,
    adName,
    trafficeSource,
    status: "Active",
    adAccount,
    budget,
    feed,
    partner,

    results: 0,
    impressions: 0,
    amountSpent: 0,
    linkClicks: 0,
    conversions: 0,
    net: 0,
    roi: 0,

    adSetting,
    headline1,
    headline2,
    description,
    brandName,
    uploader,
    optimizeKeywords,
    targetCPA,
    targetCountry,
    objective,
    createVariations: createVariations || false,
    trafficSourceOption,
    party: party || subDomain,
  };

  try {
    await set(ref(database, `campaigns/${id}`), campaignPayload);
    toast("Campagin created successfully.");
    return {
      status: STATUS.SUCCESS,
      msg: "Campaign updated successfully.",
    };
  } catch (error) {
    console.log({ error });
    toast("Campaign creation failed. Plese try again later.");
    return {
      status: STATUS.FAILED,
      msg: "Campaign creation failed. Plese try again later.",
    };
  }
};

export const createUser = async () => {
  try {
    await set(ref(database, `users/projects1896`), {
      isAdmin: false,
    });
    return {
      status: STATUS.SUCCESS,
      msg: "Campaign updated successfully.",
    };
  } catch (error) {
    return {
      status: STATUS.FAILED,
      msg: "Campaign updated failed. Plese try again later.",
    };
  }
};
