import { useSearchParams, NavLink } from "react-router-dom";

export default function BrandLink({ brand, ...props }) {
    let [params] = useSearchParams();
    let isActive = params.getAll("brand").includes(brand);
    if (!isActive) {
      params.append("brand", brand);
    } else {
      params = new URLSearchParams(
        Array.from(params).filter(
          ([key, value]) => key !== "brand" || value !== brand
        )
      );
    }
    return (
      <NavLink
        style={{ color: isActive ? "red" : "" }}
        to={`/shoes?${params.toString()}`}
        {...props}
      />
    );
  }