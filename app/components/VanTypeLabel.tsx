function VanTypeLabel({ type }: { type: string | undefined }) {
  return <i className={`van-type ${type} selected`}>{type}</i>;
}

export default VanTypeLabel;
