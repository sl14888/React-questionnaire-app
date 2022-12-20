import React from 'react';
import carpetResult from '../assets/images/carpetResult.jpg';

import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';

const CanvasImage = () => {
  const cnv = React.useRef();
  // Cirle Corners Lines
  const dataCirleCornersLines = [205, 260, 315, 365];
  // Round Corners Lines
  const dataRoundCornersLines = [30, 60, 90, 120, 150, 180, 400, 440, 480, 520, 560, 600];
  const dataRoundCornersImg1 = [45, 75, 105, 135, 165, 417, 458, 497, 536, 578];
  const dataRoundCornersImg2 = [20, 30, 30, 30, 30, 90, 110, 130, 150, 170];

  // Cirle Corners img
  const dataCirleCornersImgRadius = [341, 289, 235];

  //  Все иконки
  const dataImg = useSelector((state) => state.question.selectedSrc);

  const draw = (ctx) => {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.rect(0, 0, 1400, 1300);
    ctx.fillStyle = 'white';
    ctx.fill();

    function createCirleCornersLines(Height) {
      ctx.beginPath();

      for (let j = 0; j < 270; j++) {
        let currentAngle = (j * Math.PI) / 135;
        let waveAmplitude = Math.sin(currentAngle * 10) * 20;
        let x = 700 + Math.cos(currentAngle + 40.04) * (Height + waveAmplitude);
        let y = 680 + Math.sin(currentAngle + 40.04) * (Height + waveAmplitude);

        j > 0 ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }

      ctx.closePath();
      ctx.stroke();
    }

    function createRoundCornersLines(Height) {
      ctx.beginPath();
      ctx.strokeStyle = '#cccccc';
      ctx.arc(700, 680, Height, 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
    }

    for (let i = 0; i < dataCirleCornersLines.length; i++) {
      createCirleCornersLines(dataCirleCornersLines[i]);
    }
    for (let j = 0; j < dataRoundCornersLines.length; j++) {
      createRoundCornersLines(dataRoundCornersLines[j]);
    }

    // img ===============================================

    function createRoundCornersImg(Height, img, n) {
      img.onload = () => {
        for (let j = 0; j < n; j++) {
          let currentAngle = ((j * Math.PI) / n) * 2;
          let x = 690 + Math.cos(currentAngle + 40.04) * Height;
          let y = 670 + Math.sin(currentAngle + 40.04) * Height;
          ctx.drawImage(img, x, y, 16, 16);
        }
      };
    }

    function createCirleCornersImg(Height, img) {
      img.onload = () => {
        for (let j = 0; j < 60; j++) {
          let currentAngle = (j * Math.PI) / 20;
          let waveAmplitude = Math.sin(currentAngle * 10) * 23;
          let x = 691 + Math.cos(currentAngle + 40.04) * (Height + waveAmplitude);
          let y = 673 + Math.sin(currentAngle + 40.04) * (Height + waveAmplitude);
          ctx.drawImage(img, x, y, 20, 20);
        }
      };
    }
    const drawCirleCornersImg = (dataImg, dataCirleCornersImgRadius) => {
      for (let i = 0; i <= dataImg.length; i++) {
        const img = new Image();
        img.src = dataImg[i + 9];
        createCirleCornersImg(dataCirleCornersImgRadius[i], img);
      }
    };

    drawCirleCornersImg(dataImg, dataCirleCornersImgRadius);

    const drawImges = (dataImg, dataRoundCornersImg1, dataRoundCornersImg2) => {
      const img = new Image();
      img.src = dataImg[0];
      img.onload = () => {
        ctx.drawImage(img, 690, 670, 20, 20);
      };

      for (let i = 0; i <= dataImg.length; i++) {
        const img = new Image();
        img.src = dataImg[i + 1];
        createRoundCornersImg(dataRoundCornersImg1[i], img, dataRoundCornersImg2[i]);
      }
    };
    drawImges(dataImg, dataRoundCornersImg1, dataRoundCornersImg2);
  };

  React.useEffect(() => {
    const ctx = cnv.current.getContext('2d');
    draw(ctx);
  });

  const handleImageDownload = async () => {
    const canvas = await html2canvas(document.querySelector('.canvasImage'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'Ваш портрет личности.png', 'image/png');
    console.log(canvas);
  };

  return (
    <>
      <canvas
        className="canvasImage w-1/2"
        ref={cnv}
        width="1400px"
        height="1300px"
      ></canvas>
      <button
        className="downloadCanvas mt-5 mx-5 px-5 py-2 rounded-xl text-green-400 text-medium transition duration-500 cursor-pointer hover:bg-gray-800"
        onClick={handleImageDownload}
        download
      >
        Скачать ковер
      </button>
    </>
  );
};

export default CanvasImage;
