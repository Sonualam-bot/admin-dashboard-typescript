import AdminSidebar from "../../components/AdminSidebar";

function LineChart() {
  return (
    <div className="admin-container">
      {/* sidebar */}
      <AdminSidebar />
      <main className="chart-container"></main>
    </div>
  );
}

export default LineChart;
