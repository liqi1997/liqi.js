import getKeyArray from '../src/components/getKeyArray'

test('测试空数组，应该返回空数组', () => {
    expect(getKeyArray([])).toEqual([])
})

test('测试非空数组，应该返回非空数组', () => {
    const arr = [{
        name: '1',
    }, {
        name: '2'
    }]

    const res = getKeyArray(arr, 'name')
    expect(res).toEqual(['1', '2'])
})