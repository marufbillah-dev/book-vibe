import { useContext } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BooksContext } from "../../context/BooksContext";
import NoReadBooks from "./NoReadBooks";

// Custom shape function to draw the Triangle/Cone bars
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

const PagesToRead = () => {
  const { readBooks } = useContext(BooksContext);

  // Define a default set of colors
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088fe"];

  // Ensure data is structured correctly
  const data = readBooks.map((book) => ({
    name: book.bookName || "Unknown",
    pages: book.totalPages || 0,
  }));

  if (!readBooks || readBooks.length === 0) {
    return (
      <NoReadBooks message="Finish some books from your listed bookshelf and mark them as 'Read' to unlock this page-reading chart visualization." />
    );
  }

  return (
    <section className="px-4 mt-30">
      <div className="lg:container mx-auto">
        <div className="bg-content/3 rounded-4xl p-6 md:p-12 min-h-150 flex items-center justify-center">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E5E5"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#131313", opacity: 0.5, fontSize: 14 }}
                interval={0}
                dy={20}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#131313", opacity: 0.5 }}
              />
              <Bar
                dataKey="pages"
                shape={<TriangleBar />}
                label={{
                  position: "top",
                  fill: "#131313", // Fixed fill property
                }}
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
