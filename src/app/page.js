'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/pages/Home";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Index() {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
}
