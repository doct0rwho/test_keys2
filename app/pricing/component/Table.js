import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import SkeletonTableHeader from "./table/SkeletonTableHeader";
import cl from "./Price.module.css";
import {getTranslations} from 'next-intl/server';

import AsyncTableHeaderWrapper from "./table/AsyncTableHeaderWrapper";
// const AsyncTableHeader = dynamic(() => import('./table/AsyncTableHeader'), {
//   ssr: false,
//   loading: () => <SkeletonTableHeader />
// });

export default async function Table ({
  vrTrainingContent,
  accountExperience,
  analyticsAndReporting,
  distributionManagement,
  security,
  supportAndBilling,
  vrTrainLib,
}){
const renderCell = (cell) => {
  if (cell === 'check') {
    return <Image src="/icons/svg/check_blue.svg" alt="check icon" width={24} height={24} />;
  }

  if (cell === 'minus') {
    return <Image src="/icons/svg/minus.svg" alt="minus icon" width={24} height={24} />;
  }

  if (typeof cell === 'object' && cell.text) {
    return cell.text;
  }

  return cell;
};


  const renderSection = (title, rows) => (
    <>
      <thead>
        <tr>
          <th className={cl.compare__row_header}>
            <p className="small__header">{title}</p>
          </th>
          <th className={cl.compare__row_header}></th>
          <th className={cl.compare__row_header}></th>
          <th className={cl.compare__row_header}></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                {cellIndex === 0 ? (
                  <p className={cl.compare__row_header}>{renderCell(cell)}</p>
                ) : (
                  renderCell(cell)
                )}
              </td>
            ))}
          </tr>
        ))}
        <tr>
          <td style={{ padding: 30 }}></td>
        </tr>
      </tbody>
    </>
  );
const t = await getTranslations('Table');
  return (
    <div>
      <div className={classNames(cl.title, cl.compare__title)}>
        <h1 className="subheader" style={{ margin: 0 }}>
          {t(`vrTrainLibTitle_0`)}{(` `)}<span>{t(`vrTrainLibTitle_1`)}</span>
        </h1>
      </div>

      <div className={cl.compare}>
        <AsyncTableHeaderWrapper/>
        <table id="compareTable">
          {renderSection(t(`compareTable.title_0`), vrTrainingContent)}
          {renderSection(t(`compareTable.title_1`), accountExperience)}
          {renderSection(t(`compareTable.title_2`), analyticsAndReporting)}
          {renderSection(t(`compareTable.title_3`), distributionManagement)}
          {renderSection(t(`compareTable.title_4`), security)}
          {renderSection(t(`compareTable.title_5`), supportAndBilling)}
          <thead id="vrLib" style={{ scrollMarginTop: "170px" }}>
            <tr >
              <th className={cl.compare__row_header}>
                <p className="small__header">{t(`compareTable.title_6`)}</p>
              </th>
              <th className={cl.compare__row_header}></th>
              <th className={cl.compare__row_header}></th>
              <th className={cl.compare__row_header}></th>
            </tr>
          </thead>
          <tbody>
            {vrTrainLib.map((row, index) => (
              <tr key={index} style={{ alignItems: "center" }}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={typeof cell === 'object' && cell.isPurchase ? { color: "var(--field-color)" } : {}}
                  >
                    {cellIndex === 0 ? (
                      <p className={cl.compare__row_header}>{renderCell(cell)}</p>
                    ) : (
                      renderCell(cell)
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td style={{ padding: 30 }}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
