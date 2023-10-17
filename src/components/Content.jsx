import searchIcon from "../assets/searchicon.svg";
import dollarIcon from "../assets/dollar.svg";
import bookIcon from "../assets/book.svg";
import walletIcon from "../assets/wallet.svg";
import shoppingBagIcon from "../assets/shoppingbag.svg";
import listBurger from "../assets/listburgericon.svg";
import abstract3D from "../assets/3DAbstract.jpg";
import headphoneImage from "../assets/headphone.jpeg";
import { BarChart, Bar, XAxis, Cell, PieChart, Pie } from "recharts";
import { useEffect, useRef, useState } from "react";

const Content = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="content-container">
      <div>
        <button
          onClick={() => setShowSidebar(true)}
          className={`sidebar-toggle-on ${showSidebar ? "hide" : "show"}`}
        >
          <img src={listBurger} alt="listicon"></img>
        </button>
        <div className="headline">
          <h4>Hello Long Island 👋,</h4>
          <Search />
        </div>
      </div>
      <CardContainer />
    </div>
  );
};

const Search = () => {
  return (
    <div className="search-container">
      <button className="search-button">
        <img src={searchIcon} alt="searchicon" />
      </button>
      <input
        type="search"
        placeholder="Search"
        className="search-input"
      ></input>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      <div>
        <SummaryCard
          icon={dollarIcon}
          name="Earning"
          value="$198k"
          change="+37.8%"
          color="#dcfff0"
        />
        <SummaryCard
          icon={bookIcon}
          name="Orders"
          value="$2.4k"
          change="-2%"
          color="#ecd1ff"
        />
        <SummaryCard
          icon={walletIcon}
          name="Balance"
          value="$2.4k"
          change="-2%"
          color="#cbf1ff"
        />
        <SummaryCard
          icon={shoppingBagIcon}
          name="Total Sales"
          value="$89k"
          change="+11%"
          color="#ffb8e8"
        />
      </div>
      <div>
        <Overview />
        <CustomersPieChart />
      </div>
      <div>
        <ProductSellTable />
      </div>
    </div>
  );
};

const SummaryCard = ({ icon, name, value, change, color }) => {
  return (
    <div className="overview-card">
      <div style={{backgroundColor: color}} className="overview-card-image-container">
        <img src={icon}></img>
      </div>
      <div className="overview-card-content">
        <div>{name}</div>
        <div>{value}</div>
        <div>
          <span style={{ color: change.includes("+") ? "green" : "red" }}>
            {change}
          </span>
          <span> this month</span>
        </div>
      </div>
    </div>
  );
};

const Overview = () => {
  const overviewContainerRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const { width } = overviewContainerRef.current.getBoundingClientRect();
    setBarWidth(width - 50);

    const handleResize = () => {
      const { width, height } =
        overviewContainerRef.current.getBoundingClientRect();

      setBarWidth(width - 50);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      name: "January",
      shortName: "Jan",
      value: 4,
    },
    {
      name: "February",
      shortName: "Feb",
      value: 4,
    },
    {
      name: "March",
      shortName: "Mar",
      value: 5,
    },
    {
      name: "April",
      shortName: "Apr",
      value: 5,
    },
    {
      name: "May",
      shortName: "May",
      value: 9,
    },
    {
      name: "June",
      shortName: "Jun",
      value: 3,
    },
    {
      name: "July",
      shortName: "Jul",
      value: 12,
    },
    {
      name: "August",
      shortName: "Aug",
      value: 4,
    },
    {
      name: "September",
      shortName: "Sep",
      value: 6,
    },
    {
      name: "October",
      shortName: "Oct",
      value: 7,
    },
    {
      name: "November",
      shortName: "Nov",
      value: 7,
    },
    {
      name: "December",
      shortName: "Dec",
      value: 6,
    },
  ];

  return (
    <div ref={overviewContainerRef} className="overview-main">
      <div className="overview-header">
        <div>
          <div>Overview</div>
          <div>Monthly Earning</div>
        </div>
        <select name="cars" id="cars">
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="overview-bar">
        {barWidth && (
          <BarChart width={barWidth} height={250} data={data}>
            <Bar barSize={barWidth / 12} dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`bar-${index}`}
                  fill={
                    entry.name === "October"
                      ? "rgb(237 20 61 / 100%)"
                      : "rgb(237 20 61 / 20%)"
                  }
                />
              ))}
            </Bar>
            <XAxis axisLine={false} tickLine={false} dataKey="shortName" />
          </BarChart>
        )}
      </div>
    </div>
  );
};

const CustomersPieChart = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="customers-piechart">
      <div>
        <div>
          <div>Customers</div>
          <div>Customers that buy products</div>
        </div>
      </div>
      <div>
        <div>Lorem Ipsum</div>
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={(entry) => {
              console.log(entry);
              entry.value;
            }}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

const ProductSellTable = () => {
  const [tableCollapse, setTableCollapse] = useState({
    collapse: false,
    level: 0,
  });

  useEffect(() => {
    const handleCollapse = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 800 && windowWidth >= 470) {
        setTableCollapse({ collapse: true, level: 0 });
      } else if (windowWidth >= 800) {
        setTableCollapse({
          collapse: false,
          level: 0,
        });
      } else if (windowWidth < 470) {
        setTableCollapse({ collapse: true, level: 1 });
      }
    };

    window.addEventListener("resize", handleCollapse);

    handleCollapse();

    return () => window.removeEventListener("resize", handleCollapse);
  }, []);

  const tableData = [
    {
      image: abstract3D,
      title: "Abstact 3D",
      description: "lorem ipsum",
      stock: "32 in stock",
      price: "$40",
      totalSales: "30",
    },
    {
      image: headphoneImage,
      title: "Headphone",
      description: "a very dope headphone",
      stock: "32 in stock",
      price: "$40",
      totalSales: "30",
    },
  ];

  return (
    <div className="product-sell-container">
      <div className="product-sell-header">
        <div>Product Sell</div>
        <div>
          <Search />
          <select name="cars" id="cars">
            <option value="last30">Last 30 days</option>
            <option value="last7">Last 7 days</option>
          </select>
        </div>
      </div>
      {tableCollapse.collapse && (
        <CollapsedTable tableData={tableData} tableCollapse={tableCollapse} />
      )}
      {!tableCollapse.collapse && (
        <UncollapsedTable tableData={tableData} tableCollapse={tableCollapse} />
      )}
    </div>
  );
};

const CollapsedTable = ({ tableData, tableCollapse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(tableData[0]);

  const handleInfoClick = (product) => {
    setIsOpen(true);
    setCurrentProduct(product);
  };

  const hanleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <DetailsModal
        isOpen={isOpen}
        product={currentProduct}
        onClose={hanleClose}
      />
      <table className="product-sell-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((product, index) => (
            <tr key={index}>
              <ProductCell
                product={product}
                collapsed={true}
                tableCollapse={tableCollapse}
              />
              <td className="infobutton-td">
                <button onClick={() => handleInfoClick(product)}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const UncollapsedTable = ({ tableData, tableCollapse }) => {
  return (
    <table className="product-sell-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Total Sales</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((product, index) => (
          <tr key={index}>
            <ProductCell
              product={product}
              collapsed={false}
              tableCollapse={tableCollapse}
            />
            <td className="uncollapsable-td">{product.stock}</td>
            <td className="uncollapsable-td">{product.price}</td>
            <td className="uncollapsable-td">{product.totalSales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ProductCell = ({ product, collapsed, tableCollapse }) => (
  <td>
    <div className="product-info">
      {tableCollapse.level === 0 && (
        <img src={product.image} alt={product.title} />
      )}
      <div className="product-details">
        <h3>{product.title}</h3>
        {!collapsed && <p>{product.description}</p>}
      </div>
    </div>
  </td>
);

const DetailsModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <div className="product-info">
          <img src={product.image} alt={product.title} />
          <div className="product-details">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
        <table className="modal-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>{product.totalSales}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
