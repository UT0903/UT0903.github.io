import {
  Table,
  Column,
  AutoSizer,
  InfiniteLoader,
  CellMeasurer,
} from "react-virtualized";
import { useState } from "react";
import { ContactSupportOutlined } from "@material-ui/icons";
import useWindowDimensions from "../../contexts/UseWindowDimensions";
import tableColAttrs from "./functions/TableColAttr";
import { Content } from "antd/lib/layout/layout";
// import MyTable from './MyTable'
const NewSearchTable = ({
  rowCount,
  rowItems,
  loadMore,
  onRowClick,
  onRowRightClick,
}) => {
  // console.log('outside', tableColAttrs)
  const calHeight = (contents, widths) => {
    let widthPerWordChinese = 15;
    let widthPerWordOther = 8.5;
    let heightPerRow = 28;
    const rowsInCols = contents.map((content, idx) => {
      let chinese = 0;
      for (let i = 0; i < content.length; i++) {
        if (
          !(content.charCodeAt(i) < 0x4e00 || content.charCodeAt(i) > 0x9fa5)
        ) {
          chinese += 1;
        }
      }
      return Math.ceil(
        (chinese * widthPerWordChinese +
          widthPerWordOther * (content.length - chinese)) /
          widths[idx]
      );
    });
    console.log("rowIncol", rowsInCols);
    return (
      Math.max(
        1,
        rowsInCols.reduce((a, b) => Math.max(a, b))
      ) *
        heightPerRow +
      10
    );
  };
  const calRowHeight = (pickedAttrs) => (item) => {
    const h = Math.max(
      calHeight(
        pickedAttrs.map(
          (pickedAttr) => rowItems[item.index][pickedAttr.dataKey]
        ),
        pickedAttrs.map((pickedAttr) => pickedAttr.width)
      ),
      70
    );
    console.log("rowHeight", h);
    return h;
  };
  const calHeaderHeight = (pickedAttrs) => {
    return Math.max(
      calHeight(
        pickedAttrs.map((pickedAttr) => pickedAttr.label),
        pickedAttrs.map((pickedAttr) => pickedAttr.width)
      ),
      100
    );
  };
  const pickAttr = (width) => {
    if (width === 0) return [];
    let pickedCol = [];
    let leftWidth = width;
    if (width < 500) {
      pickedCol = tableColAttrs.filter((item) => item.priority <= 1);
    } else if (width < 900) {
      pickedCol = tableColAttrs.filter((item) => item.priority <= 2);
    } else {
      pickedCol = tableColAttrs;
    }
    pickedCol = JSON.parse(JSON.stringify(pickedCol));
    let denominator = pickedCol.map((x) => x.width);
    denominator = denominator.reduce((x, y) => x + y);
    console.log(
      "before width attr",
      width,
      pickedCol,
      tableColAttrs,
      denominator
    );
    for (let i = 0; i < pickedCol.length; i++) {
      if (i == pickedCol.length - 1) {
        pickedCol[i].width = leftWidth;
      } else {
        pickedCol[i].width = Math.floor(
          (width * pickedCol[i].width) / denominator
        );
        leftWidth -= pickedCol[i].width;
      }
    }
    console.log("everycol", pickedCol);
    return pickedCol;
  };
  const { height, width } = useWindowDimensions();
  // const _cache = new CellMeasurerCache({
  //   fixedWidth: true,
  //   minHeight: 70,
  // });
  return (
    <div style={{ height: `90%`, width: "100%" }}>
      <InfiniteLoader
        isRowLoaded={({ index }) => !!rowItems[index]}
        loadMoreRows={loadMore}
        rowCount={rowCount}
      >
        {({ onRowsRendered, registerChild }) => {
          const pickedAttrs = pickAttr(width);
          return (
            <Table
              ref={registerChild}
              onRowsRendered={onRowsRendered}
              onRowClick={onRowClick}
              onRowRightClick={onRowRightClick}
              headerStyle={{
                whiteSpace: "unset",
                overflow: "visible",
                float: "left",
              }}
              headerHeight={calHeaderHeight(pickedAttrs)}
              width={width}
              height={height * 0.9}
              rowHeight={calRowHeight(pickedAttrs)}
              rowCount={rowItems.length}
              rowGetter={({ index }) => rowItems[index]}
            >
              {pickedAttrs.map((idx) => (
                <Column
                  key={idx.label}
                  className="column"
                  label={idx.label}
                  dataKey={idx.dataKey}
                  width={idx.width}
                  style={{ whiteSpace: "unset" }}
                />
              ))}
            </Table>
          );
        }}
      </InfiniteLoader>
    </div>
  );
};
export default NewSearchTable;
