export const IndividualTx = (props) => {
  return (
    <div className="flex flex-row justify-between mb-5">
      <div>
        <div className="text-lg">{props.stockName}</div>
        <div className="text-xs">{props.date}</div>
      </div>
      <div>
        <div className="text-lg">{props.txAmount}</div>
        <div className="text-xs">{props.sharePrice + "/share"}</div>
      </div>
    </div>
  );
};
