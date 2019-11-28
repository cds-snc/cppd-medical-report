const { oneAttribute, conditionReducer }= require('./condition.mapper')

test('One Attribute method returns true if object has only one attribute', () => {
    expect(oneAttribute({"0":"0"})).toBe(true);
})
test('One Attribute method returns false if object has more than one attribute', () => {
    expect(oneAttribute({"0":"0", "1": "1"})).toBe(false);
})
test('ConditionReducer Reduces a list of conditions down to a list of names by index', () => {
    expect(conditionReducer([{name_of_condition:"foo"}])).toStrictEqual({0: "foo"});
    expect(conditionReducer([{name_of_condition:"foo"}, {name_of_condition: "bar"}])).toStrictEqual({0: "foo", 1: "bar"});
})