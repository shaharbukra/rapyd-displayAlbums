import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAlbumsIfNeeded } from "../actions/album";

export function Albums(props) {
  return <div>Albums</div>;
}

const mapStateToProps = (state) => {
  const { albums, photos } = state;
  console.log(albums);
};

export default connect(mapStateToProps)(Albums);
