import React from "react";

interface EachProps<T> {
  data: T[];
  renderItem: (item: T, index: number, data: T[]) => React.ReactNode;
  renderEmpty?: (data: T[]) => React.ReactNode;
  renderLoading?: (data: T[]) => React.ReactNode;
  loading?: boolean;
}

const defaultRenderEmpty = () => <div>No items available</div>;

const defaultRenderLoading = () => <div>Loading...</div>;

const Each = <T,>({
  data,
  renderItem,
  renderEmpty = defaultRenderEmpty,
  renderLoading = defaultRenderLoading,
  loading = false,
}: EachProps<T>) => {
  if (loading) {
    return renderLoading(data);
  }

  if (!Array.isArray(data) || data.length === 0) {
    return renderEmpty(data);
  }
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {renderItem(item, index, data)}
        </React.Fragment>
      ))}
    </>
  );
};

export default Each;
