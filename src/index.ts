function toDecibel(audioBuffer) {
  const audioCtx = new AudioContext();
  const analyserNode = audioCtx.createAnalyser();
  analyserNode.fftSize = 256;
  const bufferLength = analyserNode.frequencyBinCount;
  const dataArray = new Float32Array(bufferLength);
  const sourceNode = audioCtx.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(analyserNode);
  analyserNode.connect(audioCtx.destination);

  setInterval(() => {
    analyserNode.getFloatFrequencyData(dataArray);
    console.log(...dataArray);
  });
}
