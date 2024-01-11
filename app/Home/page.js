import React from "react";
import "../globals.css";
function Page() {
  return (
    <div>
      <div className="alartNotice">
        <div className="alart">
          <div className="iconone">
            <span className="material-symbols-outlined">campaign</span>{" "}
            <p>Broadcast Message</p>
          </div>
          <div className="mesage">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos illo,
            voluptates autem nobis voluptas atque voluptatem officiis, ad
            perspiciatis corrupti, vel deleniti neque asperiores eaque harum
            dolorem est nisi. Corporis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet repellat architecto porro cum eos molestiae
            corporis reiciendis placeat voluptas asperiores, velit natus
            blanditiis, suscipit dolorem quibusdam voluptatem et, soluta
            similique.
          </div>
          <div className="lower">
            <div className="left">
              <span className="material-symbols-outlined">sunny_snowing</span>{" "}
              <p>DP_CENTRAL</p>
            </div>
            <div className="rightone">
              <span className="material-symbols-outlined">chevron_left</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
