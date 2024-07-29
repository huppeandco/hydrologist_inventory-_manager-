import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import ProductUpload from './uploadproduct';


function UploadAll() {
  const [xlsxData, setXLSXData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0]; // Assuming we're reading the first sheet
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setXLSXData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ position: 'relative' }}>


      {!xlsxData &&
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
          <div style={{background: '#8080802b', paddingInline: 60, paddingBlock: 10, borderRadius: 5}}>
            <h2 style={{textTransform: 'capitalize', fontWeight: 500}}>chose a cvs or xlsx file please</h2>
            <input type="file" accept=".xlsx" onChange={handleFileUpload} />

          </div>
        </div>
      }
      {xlsxData && (
        <div style={{ marginBottom: 120 }}>

          <h2 style={{fontWeight: 500,textTransform: 'capitalize', marginBottom: -13, }}>Edit and submit your Product</h2>
          {/*    <h2>XLSX Data</h2> */}

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            {xlsxData.slice(1).map((row, rowIndex) => (
              <>

                <ProductUpload key={rowIndex} zIndex={300 - rowIndex} row={row} />

              </>
            ))}

          </div>
          <button className='upload-handle-btn'>  
              upload All
          </button>



        </div>
      )}
    </div>
  );
}

export default UploadAll;

