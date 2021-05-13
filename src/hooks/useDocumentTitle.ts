import { useEffect, useRef } from "react";

export const useDocumentTitle = (title: string) => {
  const oldTitle = useRef(document.title).current;
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = oldTitle;
    };
  }, [title]);
};
