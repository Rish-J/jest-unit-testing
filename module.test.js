// module.test.js
const mut = require('./module.js'); // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected1 = 0;
    const got1 = mut.div(0, 18);
    expect(got1).toBe(expected1);

    const expected2 = 1;
    const got2 = mut.div(12, 12);
    expect(got2).toBe(expected2);

    const expected3 = -3;
    const got3 = mut.div(12, -4);
    expect(got3).toBe(expected3);

    const expected4 = 12;
    const got4 = mut.div(144, 12);
    expect(got4).toBe(expected4);

    const expected5 = Infinity;
    const got5 = mut.div(1, 0);
    expect(got5).toBe(expected5);

    const expected6 = NaN;
    const got6 = mut.div(0, 0);
    expect(got6).toBe(expected6);
});

test('Testing containsNumbers -- success', () => {
    const expected1 = false;
    const got1 = mut.containsNumbers("");
    expect(got1).toBe(expected1);

    const expected2 = false;
    const got2 = mut.containsNumbers("text");
    expect(got2).toBe(expected2);

    const expected3 = true;
    const got3 = mut.containsNumbers("number1text");
    expect(got3).toBe(expected3);

    const expected4 = true;
    const got4 = mut.containsNumbers("1text");
    expect(got4).toBe(expected4);

    const expected5 = true;
    const got5 = mut.containsNumbers("text1");
    expect(got5).toBe(expected5);

    const expected6 = true;
    const got6 = mut.containsNumbers("1");
    expect(got6).toBe(expected6);

    const expected7 = false;
    const got7 = mut.containsNumbers("no numbers");
    expect(got7).toBe(expected7);
});
