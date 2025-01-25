/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from "react";
import { Modal, Input, Select, Upload, Button, Switch } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. Swaziland)",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (North)",
  "Korea (South)",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const trafficSources = {
  Native: ["Outbrain", "Taboola"],
  Social: ["Facebook", "TikTok"],
  Display: ["Google", "Test"],
  Search: ["Google", "Bing"],
};

function CreateCampaignForm({ modalVisible, onClose }) {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "Objective",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Objective</div>
          <div className="flex justify-center space-x-4">
            {["Traffic", "Sales"].map((option) => (
              <div
                key={option}
                className={`w-40 h-16 flex items-center justify-center cursor-pointer rounded-lg border-2 ${
                  formData.objective === option
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => setFormData({ ...formData, objective: option })}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      ),
      isValid: () => !!formData.objective,
    },
    {
      name: "Campaign Name",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Campaign Name</div>
          <Input
            placeholder="Enter campaign name"
            value={formData.campaignName || ""}
            onChange={(e) =>
              setFormData({ ...formData, campaignName: e.target.value })
            }
          />
        </>
      ),
      isValid: () => !!formData.campaignName?.trim(),
    },
    {
      name: "Daily Budget",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Daily Budget</div>
          <Input
            type="number"
            placeholder="Enter daily budget"
            value={formData.dailyBudget || ""}
            onChange={(e) =>
              setFormData({ ...formData, dailyBudget: e.target.value })
            }
          />
        </>
      ),
      isValid: () => !!formData.dailyBudget,
    },
    {
      name: "Target CPA",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Target CPA</div>
          <Input
            type="number"
            placeholder="Enter target CPA"
            value={formData.targetCPA || ""}
            onChange={(e) =>
              setFormData({ ...formData, targetCPA: e.target.value })
            }
          />
        </>
      ),
      isValid: () => !!formData.targetCPA,
    },
    {
      name: "Target Country",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Target Country</div>
          <Select
            mode="multiple"
            placeholder="Select countries"
            value={formData.targetCountry || []}
            onChange={(value) =>
              setFormData({ ...formData, targetCountry: value })
            }
            style={{ width: "100%" }}
          >
            {countries.map((country) => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>
        </>
      ),
      isValid: () => (formData.targetCountry || []).length > 0,
    },
    {
      name: "Ad Set Name",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Ad Set Name</div>
          <Input
            placeholder="Enter Ad Set Name"
            value={formData.adSetName || ""}
            onChange={(e) =>
              setFormData({ ...formData, adSetName: e.target.value })
            }
          />
        </>
      ),
      isValid: () => !!formData.adSetName?.trim(),
    },
    {
      name: "Ad Name",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Ad Name</div>
          <div className="flex items-center">
            <Input
              placeholder="Enter Ad Name"
              value={formData.adName || ""}
              onChange={(e) =>
                setFormData({ ...formData, adName: e.target.value })
              }
            />
            <div className="mt-4">
              <Switch
                checked={formData.createVariations || false}
                onChange={(checked) =>
                  setFormData({ ...formData, createVariations: checked })
                }
                style={{ marginLeft: "8px" }}
              />
              <span className="ml-2">Create Variations</span>
            </div>
          </div>
        </>
      ),
      isValid: () => !!formData.adName?.trim(),
    },
    {
      name: "Traffic Source Selection",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Traffic Source Selection</div>
          <div className="flex justify-center space-x-4">
            {["Native", "Social", "Display", "Search"].map((option) => (
              <div
                key={option}
                className={`w-40 h-16 flex items-center justify-center cursor-pointer rounded-lg border-2 ${
                  formData.trafficSource === option
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() =>
                  setFormData({ ...formData, trafficSource: option })
                }
              >
                {option}
              </div>
            ))}
          </div>
        </>
      ),
      isValid: () => !!formData.trafficSource,
    },
    ...(formData.trafficSource
      ? [
          {
            name: "Traffic Source Option",
            condition: true,
            component: (
              <>
                <div className="font-bold text-lg mb-2">
                  Traffic Source Option
                </div>
                <div className="flex justify-center space-x-4">
                  {trafficSources[formData.trafficSource]?.map((option) => (
                    <div
                      key={option}
                      className={`w-40 h-16 flex items-center justify-center cursor-pointer rounded-lg border-2 ${
                        formData.trafficSourceOption === option
                          ? "bg-blue-500 text-white"
                          : "bg-white"
                      }`}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          trafficSourceOption: option,
                        })
                      }
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </>
            ),
            isValid: () => !!formData.trafficSourceOption,
          },
        ]
      : []),
    {
      name: "Optimize Campaign",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Optimize Campaign</div>
          <Input.TextArea
            rows={4}
            placeholder="Enter 10+ keywords to optimize your campaign"
            value={formData.optimizeKeywords || ""}
            onChange={(e) =>
              setFormData({ ...formData, optimizeKeywords: e.target.value })
            }
          />
        </>
      ),
      isValid: () => !!formData.optimizeKeywords?.trim(),
    },
    {
      name: "Ad Settings",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Ad Settings</div>
          <div className="flex justify-center space-x-4">
            {["Manual", "AI Optimised"].map((setting) => (
              <div
                key={setting}
                className={`w-40 h-16 flex items-center justify-center cursor-pointer rounded-lg border-2 ${
                  formData.adSetting === setting
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => setFormData({ ...formData, adSetting: setting })}
              >
                {setting}
              </div>
            ))}
          </div>
        </>
      ),
      isValid: () => !!formData.adSetting?.trim(),
    },
    {
      name: "Manual Ad Settings",
      condition: formData.adSetting === "Manual", // Only show if "Manual" is selected
      component: (
        <>
          <div className="font-bold text-lg mb-2">Manual Ad Settings</div>
          <div className="space-y-4">
            <Input
              maxLength={150}
              placeholder="Headline 1 (Max 150 characters)"
              value={formData.headline1 || ""}
              onChange={(e) =>
                setFormData({ ...formData, headline1: e.target.value })
              }
            />
            <Input
              maxLength={150}
              placeholder="Headline 2 (Max 150 characters)"
              value={formData.headline2 || ""}
              onChange={(e) =>
                setFormData({ ...formData, headline2: e.target.value })
              }
            />
            <Input.TextArea
              maxLength={250}
              rows={4}
              placeholder="Description (Max 250 characters)"
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <Input
              placeholder="Brand Name"
              value={formData.brandName || ""}
              onChange={(e) =>
                setFormData({ ...formData, brandName: e.target.value })
              }
            />
          </div>
        </>
      ),
      isValid: () =>
        !!formData.brandName?.trim() &&
        !!formData.description?.trim() &&
        !!formData.headline2?.trim() &&
        !!formData.headline1?.trim(),
    },
    {
      name: "Image Uploader",
      condition: true,
      component: (
        <>
          <div className="font-bold text-lg mb-2">Image Uploader</div>
          <div className="flex items-center justify-between">
            <Upload>
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
            <div
              className={`w-40 h-16 flex items-center justify-center cursor-pointer rounded-lg border-2 ${
                formData.uploader === "AI+"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => setFormData({ ...formData, uploader: "AI+" })}
            >
              AI+
            </div>
          </div>
        </>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      if (currentStep === 10 && formData.adSetting === "AI Optimised") {
        setCurrentStep(currentStep + 2);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      if (currentStep === 12 && formData.adSetting === "AI Optimised") {
        setCurrentStep(currentStep - 2);
      } else {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Modal
      visible={modalVisible}
      onCancel={onClose}
      footer={null}
      centered
      maskClosable={false}
    >
      <div className="p-6">
        <div>
          {steps[currentStep].condition && steps[currentStep].component}
        </div>
        <div className="flex justify-between mt-6">
          <Button onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </Button>
          {currentStep === steps.length - 1 ? (
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={handleNext}
              disabled={!steps[currentStep].isValid()}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default CreateCampaignForm;
