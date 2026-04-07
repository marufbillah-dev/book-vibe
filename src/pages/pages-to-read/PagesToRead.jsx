import { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { BooksContext } from "../../context/BooksContext";
import NoReadBooks from "./NoReadBooks";
import useTitle from "../../hooks/useTitle";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Wraps long tick labels into multiple lines
const CustomXAxisTick = ({ x, y, payload, isMobile }) => {
  const maxChars = isMobile ? 8 : 14;
  const words = payload.value.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    if ((current + " " + word).trim().length > maxChars) {
      if (current) lines.push(current.trim());
      current = word;
    } else {
      current = (current + " " + word).trim();
    }
  }
  if (current) lines.push(current.trim());

  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line, i) => (
        <text
          key={i}
          x={0}
          y={0}
          dy={16 + i * 14}
          textAnchor="middle"
          fill="#131313"
          fillOpacity={0.45}
          fontSize={isMobile ? 11 : 13}
          fontFamily="Work Sans, sans-serif"
        >
          {line}
        </text>
      ))}
    </g>
  );
};

// tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3 font-work-sans">
        <p className="text-xs text-content/50 mb-0.5 max-w-40 truncate">
          {payload[0].payload.name}
        </p>
        <p className="text-sm font-bold text-content">
          {payload[0].value}{" "}
          <span className="font-normal text-content/50">pages</span>
        </p>
      </div>
    );
  }
  return null;
};

const PagesToRead = () => {
  useTitle("Chart | Book Vibe");
  const { readBooks } = useContext(BooksContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 640;
  const isTablet = width < 1024;

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088fe"];

  const data = readBooks.map((book) => ({
    name: book.bookName || "Unknown",
    pages: book.totalPages || 0,
  }));

  if (!readBooks || readBooks.length === 0) {
    return (
      <NoReadBooks message="Finish some books from your listed bookshelf and mark them as 'Read' to unlock this page-reading chart visualization." />
    );
  }

  const chartMargin = {
    top: 24,
    right: isMobile ? 8 : 20,
    left: isMobile ? -16 : 0,
    bottom: isMobile ? 70 : isTablet ? 80 : 60,
  };

  const chartHeight = isMobile ? 320 : isTablet ? 380 : 460;

  return (
    <section className="px-4 pt-24 pb-16 bg-gray-50/30 min-h-screen">
      <div className="lg:container mx-auto space-y-6">
        {/* Page Title */}
        <div className="text-center py-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair-display text-content">
            Pages to Read
          </h2>
          <p className="text-content/50 font-work-sans text-sm mt-2">
            Your reading progress at a glance
          </p>
        </div>

        {/* Chart Container */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 md:p-10">
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart data={data} margin={chartMargin}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#F3F4F6"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                interval={0}
                tick={<CustomXAxisTick isMobile={isMobile} />}
                height={isMobile ? 80 : 70}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                width={isMobile ? 36 : 48}
                tick={{
                  fill: "#131313",
                  opacity: 0.45,
                  fontFamily: "Work Sans, sans-serif",
                  fontSize: isMobile ? 11 : 13,
                }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#f9fafb" }}
              />
              <Bar
                dataKey="pages"
                shape={<TriangleBar />}
                label={
                  !isMobile && {
                    position: "top",
                    fill: "#131313",
                    opacity: 0.5,
                    fontSize: 12,
                    fontFamily: "Work Sans, sans-serif",
                  }
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default PagesToRead;
