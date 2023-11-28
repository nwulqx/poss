/**
 * id: number; id eg: 4248
 * type: number; 0: 试乘, 1: 试驾
 * model: string; 车型 eg: 718 Boxster
 * commNo: string; commNo eg: E12209
 * status: number; 状态 0: 编辑中, 1: 等待执行, 2: 执行中 3: 已取消 4: 已完成
 * customerName: string; 客户姓名
 * bpId: string; bpId
 * duration: number; 持续时间，单位为分钟 eg: 10分钟
 * distance: number; 里程数，单位为公里 eg: 10公里
 * startTime: number; 预约起始时间
 * endTime: number; 预约结束时间
 */

export const testDriveListData = [
    {
        id: 4248,
        type: 1,
        model: '718 Boxster',
        commNo: 'E12209',
        status: 0,
        customerName: '翁俪立',
        bpId: '6002455555',
        duration: 20,
        distance: 40,
        startTime: 1700962336449,
        endTime: 1700963536449,
    },
    {
        id: 4249,
        type: 0,
        model: '911',
        commNo: 'E12210',
        status: 0,
        customerName: '尹淳沫',
        bpId: '6002455556',
        duration: 15,
        distance: 20,
        startTime: 1700964736449,
        endTime: 1700965636449,
    },
    {
        id: 4266,
        type: 1,
        model: 'Macan',
        commNo: 'E12211',
        status: 2,
        customerName: '张书巧',
        bpId: '6002455557',
        duration: 15,
        distance: 22,
        startTime: 1700990836449,
        endTime: 1700991736449,
    },
    {
        id: 4312,
        type: 1,
        model: '911',
        commNo: 'D46847',
        status: 2,
        customerName: '乔诗荷',
        bpId: '6002455558',
        duration: 10,
        distance: 13,
        startTime: 1700990836449,
        endTime: 1700991436449,
    },
    {
        id: 4200,
        type: 0,
        model: 'Taycan',
        commNo: 'D66211',
        status: 2,
        customerName: '谢玥笛',
        bpId: '6002455558',
        duration: 10,
        distance: 13,
        startTime: 1700990836449,
        endTime: 1700991436449,
    },
    {
        id: 3998,
        type: 1,
        model: 'panamera',
        commNo: 'P66211',
        status: 4,
        customerName: '魏欣愉',
        bpId: '6002455558',
        duration: 30,
        distance: 45,
        startTime: 1700962508928,
        endTime: 1700964308928,
    },
]