import React from "react";

import './index.scss'

const Loader = () => {
    return <div className="loader">
        <div className="spinner-grow text-primary" role="status">
  <span className="sr-only"/>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="sr-only"/>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="sr-only"/>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only"/>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="sr-only"/>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="sr-only"/>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="sr-only"/>
</div>
    </div>
}

export default Loader