import { ref, set } from "firebase/database";
import moment from "moment";
import { v4 as uuid } from "uuid";

import { database } from "../configs/firebaseConfig";
import { STATUS } from "../constants/common";

export const createCampaign = async ({
  date,
  campaignName,
  adSet,
  adName,
  trafficeSource,
  status,
  adAccount,
  budget,
  results,
  impressions,
  amountSpent,
  linkClicks,
  conversions,
  net,
  roi,
}) => {
  const id = uuid();
  try {
    await set(ref(database, `campaigns/${id}`), {
      createdAt: moment().valueOf(),
      isDeleted: false,
      id,
      date,
      campaignName,
      adSet,
      adName,
      trafficeSource,
      status,
      adAccount,
      budget,
      results,
      impressions,
      amountSpent,
      linkClicks,
      conversions,
      net,
      roi,
    });
    return {
      status: STATUS.SUCCESS,
      msg: "Campaign updated successfully.",
    };
  } catch (error) {
    console.log({ error });
    return {
      status: STATUS.FAILED,
      msg: "Campaign updated failed. Plese try again later.",
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
    console.log({ error });
    return {
      status: STATUS.FAILED,
      msg: "Campaign updated failed. Plese try again later.",
    };
  }
};
