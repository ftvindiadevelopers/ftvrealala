import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { login } from "../api/api";

function Metas() {
  const [metaData, setMetaData] = useState({});
  const location = useLocation();
  const path = location.pathname;
  const parts = path.split("/");
  const lastPart = parts[parts.length - 1];

useEffect(() => {
  const fetchData = async () => {
    const fetchToken = await login();
    const headers = {
      "content-Type": "application/json",
      Authorization: `Bearer ${fetchToken}`,
    };

    try {
      const response = await fetch(
        `https://node.ftvrealestate.in:8089/api/enquiry/fetchmeta/${lastPart}`,
        {
          method: "GET",
          headers,
          mode: "cors",
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setMetaData(data); 
      } else {
        console.error("fetch meta data failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error meta fetching data:", error);
    }
  };
  fetchData();
}, [lastPart]);
return (
  <>
    {metaData ? (
      <>
        <Helmet>
          <title>{metaData?.data?.[0]?.meta_title}</title>
          <meta
            name="description"
            content={metaData?.data?.[0]?.meta_description}
          />
          <meta name="keywords" content={metaData?.data?.[0]?.meta_keyword} />
        </Helmet>
      </>
    ) : (
      <Helmet>
        <title>Real Estate Brand Licensing in India | FTV Real Estate</title>
        <meta
          name="description"
          content="Elevate your properties brand with World-class Luxurious real estate network with our Real Estate Brand Licensing Opportunities in India."
        />
        <meta
          name="keywords"
          content="Licensing Solutions for Luxury Real Estate Brands in India,
                  Real Estate Brand Partnership in India,
                  Luxury Real Estate Licensee Marketing in India,
                  Licensing Your Real Estate Brand in India"
        />
      </Helmet>
    )}
  </>
);
}
export default Metas;