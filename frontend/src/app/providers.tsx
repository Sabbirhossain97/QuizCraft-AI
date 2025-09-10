"use client"
import { ReactNode } from "react";
import QueryProvider from "./react-query/QueryProvider";
import { store } from "@/redux/slices/store";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: ReactNode }) {

    return (
        <Provider store={store}>
            <QueryProvider>
                {children}
            </QueryProvider>
        </Provider>
    )
}