import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../components/StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response.js";
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // FAKE DATA FOR TESTING
//   const data = Response;
//   console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchPage__logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons ></Search>
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon></SearchIcon>
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon></DescriptionIcon>
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon></ImageIcon>
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon></LocalOfferIcon>
                <Link to="/Shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon></RoomIcon>
                <Link to="/Shopping">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon></MoreVertIcon>
                <Link to="/Shopping">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/Tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
      <div className="searchPage__results">
        <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
        </p>
        {data?.items.map(item => (
            <div className="searchPage__result">
                <a href={item.link} className="searchPage__resultShortLink">
                {item.displayLink} <MoreVertIcon/>
                </a>
                <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">
                {item.snippet}
                </p>
            </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default SearchPage;
