import AdminSidebar from "../components/AdminSidebar";

function Dashboard() {
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* main  */}
      <main>maincontent</main>
    </div>
  );
}

export default Dashboard;
