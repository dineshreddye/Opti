import { useEffect, useMemo, useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import _keys from "lodash/keys";
import { Col, Row, Select, Typography, DatePicker } from "antd";
// import dayjs from "dayjs";
import { get, onValue, query, ref } from "firebase/database";
import dayjs from "dayjs";
import { database } from "../../configs/firebaseConfig";
import { NUMBER_TO_MONTH_MAPPING, PARTY_OPTIONS } from "../../constants/common";

const { Option } = Select;
const { Text } = Typography;
function Billing() {
  const [selectedMonth, setSelectedMonth] = useState(undefined);
  const [selectedPaymentAccount, setSelectedPaymentAccount] = useState("");
  const [paymentAccountDetails, setPaymentAccountDetails] = useState(null);

  // useEffect(() => {
  //   const paymentsRef = query(ref(database, "payments"));
  //   const unsubscribe = onValue(paymentsRef, (snapshot) => {
  //     const paymentsResponse = snapshot.val();
  //     setPaymentAccounts(paymentsResponse);
  //   });
  //   return unsubscribe;
  // }, []);

  const handleSelectedAccountChange = (value) => {
    setSelectedPaymentAccount(value);
  };

  const onMonthSelect = (date) => {
    setSelectedMonth(date);
  };

  useEffect(() => {
    (async function getPaymentAccountDetails() {
      if (selectedMonth && selectedPaymentAccount) {
        const month = NUMBER_TO_MONTH_MAPPING[dayjs(selectedMonth).month()];
        const year = dayjs(selectedMonth).year();
        const paymentDetailsRef = ref(
          database,
          `payments/${selectedPaymentAccount}/${month}_${year}`,
        );
        const paymentDetails = await get(paymentDetailsRef);
        if (paymentDetails.exists()) {
          setPaymentAccountDetails(paymentDetails.val());
        }
      }
    })();
  }, [selectedMonth, selectedPaymentAccount]);

  const amountPercentageOfThreshold = useMemo(() => {
    const { threshold, amount } = paymentAccountDetails || {};
    if (threshold && amount) {
      return ((Number(amount) / Number(threshold)) * 100).toFixed(2);
    }
    return 0;
  }, [paymentAccountDetails]);

  return (
    <div style={{ padding: 16 }}>
      <Row gutter={[16, 16]} style={{ width: "100%", gap: 32 }}>
        <Col
          xs={24}
          sm={12}
          md={6}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Text>Select Month</Text>
          <DatePicker
            value={selectedMonth}
            format="MMMM, YYYY"
            onChange={onMonthSelect}
            picker="month"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Text>Payment Account</Text>
          <Select
            placeholder="Select Account"
            style={{ width: "100%" }}
            value={selectedPaymentAccount || undefined}
            disabled={!selectedMonth}
            onChange={handleSelectedAccountChange}
          >
            {PARTY_OPTIONS.map((partyOption) => {
              return (
                <Option key={partyOption.key} value={partyOption.key}>
                  {partyOption.label}
                </Option>
              );
            })}
            {/* {paymentAccountOptions.map((account) => (
              <Option key={account} value={account}>
                {account}
              </Option>
            ))} */}
          </Select>
        </Col>
      </Row>
      <h1 style={{ fontSize: 24, margin: "1.6rem 0" }}>Payments</h1>
      <div
        style={{
          background: "white",
          padding: 16,
          border: "1px solid lightgray",
          borderRadius: 8,
        }}
      >
        <div className="flex" style={{ gap: "4rem" }}>
          <div className="flex-1">
            <div>
              <p style={{ fontSize: 20, marginBottom: 12 }}>Your Earnings</p>
              <p style={{ fontWeight: 600, color: "gray", marginBottom: 16 }}>
                {`Paid monthly if the amount is at least $${paymentAccountDetails?.threshold ?? 0}(your payment
                threshold)`}
              </p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  height: 12,
                  backgroundColor: "lightgray",
                  width: "100%",
                }}
              />
              <div
                className="flex justify-between"
                style={{ color: "gray", fontSize: "0.8rem" }}
              >
                <p>{`You've reached ${amountPercentageOfThreshold}% of your payment threshold`}</p>
                <p>{`Payment threshold: US$${paymentAccountDetails?.threshold ?? 0}`}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.8rem",
              }}
            >
              <CalendarOutlined />
              <p>{`Your last payment was issued on 21Jan for US$${paymentAccountDetails?.amount ?? 0}`}</p>
            </div>
          </div>
          <p
            style={{ fontSize: 24, fontWeight: "bold" }}
          >{`US$${paymentAccountDetails?.amount ?? 0}`}</p>
        </div>
      </div>
      <div>
        <div />
        <div />
      </div>
    </div>
  );
}

export default Billing;
