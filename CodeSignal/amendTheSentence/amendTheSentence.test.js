const amendTheSentence = require('./index');

describe('amendTheSentence', () => {
  test('Should return codesignal is awesome', () => {
    expect(amendTheSentence('CodesignalIsAwesome')).toBe(
      'codesignal is awesome'
    );
  });

  test('Should return hello', () => {
    expect(amendTheSentence('Hello')).toBe('hello');
  });

  test('Should return i ei m cy k adsf g m pa', () => {
    expect(amendTheSentence('iEiMCyKAdsfGMPa')).toBe('i ei m cy k adsf g m pa');
  });

  test('Should return s v hi qh p f qrjir efc v r zb pwd nh h hiq', () => {
    expect(amendTheSentence('sVHiQhPFQrjirEfcVRZbPwdNhHHiq')).toBe(
      's v hi qh p f qrjir efc v r zb pwd nh h hiq'
    );
  });

  test('Should return wh o vx jmrmx w r x w m c qy l h j h jv xm oyvgc n rrv nc cw x k e m d u npu y rbczfxf f tl s lhsv x oxhy b smw a f ia vh h q fs z e y o kp e r r l g mg n c t u', () => {
    expect(
      amendTheSentence(
        'WhOVxJmrmxWRXWMCQyLHJHJvXmOyvgcNRrvNcCwXKEMDUNpuYRbczfxfFTlSLhsvXOxhyBSmwAFIaVhHQFsZEYOKpERRLGMgNCTU'
      )
    ).toBe(
      'wh o vx jmrmx w r x w m c qy l h j h jv xm oyvgc n rrv nc cw x k e m d u npu y rbczfxf f tl s lhsv x oxhy b smw a f ia vh h q fs z e y o kp e r r l g mg n c t u'
    );
  });
});
