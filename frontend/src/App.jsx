import AppRoutes from "./components/routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRoutes />

   
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#111827",
            color: "#fff",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#6366f1",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}

export default App;