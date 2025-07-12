import {
  useAcceptSwapMutation,
  useRejectSwapMutation,
  useCancelSwapMutation,
} from "./swapApi";

const SwapActionButtons = ({ swap, refetch }) => {
  const [acceptSwap] = useAcceptSwapMutation();
  const [rejectSwap] = useRejectSwapMutation();
  const [cancelSwap] = useCancelSwapMutation();

  const handleAction = async action => {
    const fnMap = {
      accept: acceptSwap,
      reject: rejectSwap,
      cancel: cancelSwap,
    };
    try {
      await fnMap[action](swap._id).unwrap();
      refetch();
    } catch (err) {
      alert("Action failed");
    }
  };

  if (swap.status === "pending" && swap.isIncoming) {
    return (
      <>
        <button
          onClick={() => handleAction("accept")}
          className="btn btn-success"
        >
          Accept
        </button>
        <button
          onClick={() => handleAction("reject")}
          className="btn btn-danger"
        >
          Reject
        </button>
      </>
    );
  }

  if (swap.status === "pending" && swap.isOutgoing) {
    return (
      <button
        onClick={() => handleAction("cancel")}
        className="btn btn-warning"
      >
        Cancel
      </button>
    );
  }

  return null;
};

export default SwapActionButtons;
