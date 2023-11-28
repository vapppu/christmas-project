import "../App.css";

const Card = ({card, handleClick}) => {
  const activityClass = card.active ? "active" : "nonActive";
  const icon = card.playing ? (
    <svg
    className="play"
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
        fill="#000000"
      />
      <path
        d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
        fill="#000000"
      />
    </svg>
  ) : (
    <svg
    className="play"
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
        fill="#000000"
      />
    </svg>
  );

  if (!card.found) {
    return (
      <div className={`card ${activityClass}`} onClick={handleClick}>
        {icon}
      </div>
    );
  }
  return (
    <div className="card found">
<svg width="50px" height="50px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2C13.0826 2 10.2847 3.15893 8.22184 5.22183C6.15894 7.28473 5.00001 10.0826 5.00001 13V29C4.9992 29.1519 5.03299 29.302 5.09883 29.4389C5.16468 29.5757 5.26084 29.6958 5.38001 29.79C5.5002 29.8835 5.64015 29.9483 5.78919 29.9795C5.93823 30.0107 6.09242 30.0075 6.24001 29.97L15 27.77V24C15 23.7348 15.1054 23.4804 15.2929 23.2929C15.4804 23.1054 15.7348 23 16 23C16.2652 23 16.5196 23.1054 16.7071 23.2929C16.8947 23.4804 17 23.7348 17 24V27.81L25.76 30C25.8397 30.0096 25.9203 30.0096 26 30C26.2652 30 26.5196 29.8946 26.7071 29.7071C26.8947 29.5196 27 29.2652 27 29V13C27 10.0826 25.8411 7.28473 23.7782 5.22183C21.7153 3.15893 18.9174 2 16 2Z" fill="#FBC02D"/>
<path d="M5.00001 13V29C4.9992 29.1519 5.03299 29.302 5.09883 29.4389C5.16468 29.5757 5.26084 29.6958 5.38001 29.79C5.5002 29.8835 5.64015 29.9483 5.78919 29.9795C5.93823 30.0107 6.09242 30.0075 6.24001 29.97L15 27.8V24C14.9994 23.7465 15.0951 23.5022 15.2677 23.3165C15.4404 23.1309 15.6771 23.0177 15.93 23V2C13.0248 2.01849 10.2448 3.18557 8.19705 5.24647C6.14927 7.30737 4.99996 10.0947 5.00001 13Z" fill="#FDD835"/>
<path d="M22.87 10.92C22.812 10.7422 22.7054 10.5843 22.5623 10.4641C22.4191 10.3439 22.2451 10.2663 22.06 10.24L18.46 9.70997L16.85 6.44997C16.7681 6.2809 16.6403 6.13832 16.4811 6.03855C16.3219 5.93878 16.1379 5.88586 15.95 5.88586C15.7621 5.88586 15.5781 5.93878 15.4189 6.03855C15.2597 6.13832 15.1319 6.2809 15.05 6.44997L13.44 9.70997L9.84 10.24C9.65686 10.2682 9.48516 10.3468 9.34409 10.467C9.20301 10.5871 9.09809 10.7441 9.04105 10.9205C8.984 11.0968 8.97708 11.2855 9.02104 11.4655C9.065 11.6455 9.15812 11.8098 9.29 11.94L11.89 14.48L11.28 18.07C11.2432 18.2565 11.2604 18.4496 11.3295 18.6267C11.3985 18.8038 11.5167 18.9576 11.67 19.07C11.8213 19.1816 12.001 19.2483 12.1885 19.2625C12.376 19.2766 12.5637 19.2376 12.73 19.15L16 17.43L19.22 19.13C19.3668 19.2004 19.5272 19.2379 19.69 19.24C19.8984 19.2386 20.1012 19.1722 20.27 19.05C20.4252 18.9388 20.5453 18.7856 20.6161 18.6084C20.687 18.4312 20.7057 18.2375 20.67 18.05L20 14.48L22.6 11.94C22.7356 11.812 22.8328 11.6487 22.8805 11.4685C22.9282 11.2882 22.9246 11.0983 22.87 10.92Z" fill="#C2185B"/>
<path d="M15.05 6.44995L13.44 9.70995L9.84002 10.23C9.65375 10.2571 9.47892 10.3362 9.33562 10.4583C9.19233 10.5803 9.0864 10.7404 9.03002 10.92C8.9782 11.0945 8.97504 11.2799 9.02086 11.4561C9.06668 11.6324 9.15974 11.7927 9.29002 11.92L11.89 14.46L11.28 18.05C11.2495 18.2334 11.2708 18.4217 11.3415 18.5938C11.4121 18.7658 11.5293 18.9147 11.68 19.0238C11.8306 19.1329 12.0087 19.1978 12.1942 19.2113C12.3797 19.2247 12.5652 19.1862 12.73 19.1L16 17.43V5.93995C15.8095 5.92531 15.6188 5.96556 15.4504 6.05595C15.282 6.14633 15.1431 6.28306 15.05 6.44995Z" fill="#EC407A"/>
<path d="M16 2C13.0826 2 10.2847 3.15893 8.22184 5.22183C6.15894 7.28473 5.00001 10.0826 5.00001 13V29C4.9992 29.1519 5.03299 29.302 5.09883 29.4389C5.16468 29.5757 5.26084 29.6958 5.38001 29.79C5.5002 29.8835 5.64015 29.9483 5.78919 29.9795C5.93823 30.0107 6.09242 30.0075 6.24001 29.97L16 27.53L25.76 30C25.8397 30.0096 25.9203 30.0096 26 30C26.2652 30 26.5196 29.8946 26.7071 29.7071C26.8947 29.5196 27 29.2652 27 29V13C27 10.0826 25.8411 7.28473 23.7782 5.22183C21.7153 3.15893 18.9174 2 16 2ZM16 4C17.78 4 19.5201 4.52784 21.0001 5.51677C22.4802 6.50571 23.6337 7.91131 24.3149 9.55585C24.9961 11.2004 25.1744 13.01 24.8271 14.7558C24.4798 16.5016 23.6226 18.1053 22.364 19.364C21.1053 20.6226 19.5017 21.4798 17.7558 21.8271C16.01 22.1743 14.2004 21.9961 12.5559 21.3149C10.9113 20.6337 9.50572 19.4802 8.51679 18.0001C7.52786 16.5201 7.00001 14.78 7.00001 13C7.00001 10.6131 7.94823 8.32387 9.63605 6.63604C11.3239 4.94821 13.6131 4 16 4ZM7.00001 27.71V19.28C7.91568 20.5897 9.10571 21.6841 10.4873 22.4871C11.8689 23.2902 13.4088 23.7825 15 23.93V25.71L7.00001 27.71ZM25 27.71L17 25.71V23.91C18.5912 23.7625 20.1312 23.2702 21.5127 22.4671C22.8943 21.6641 24.0843 20.5697 25 19.26V27.71Z" fill="#263238"/>
</svg>
    </div>
  );
};

export default Card;
