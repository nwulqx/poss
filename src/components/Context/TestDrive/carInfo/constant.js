/**
 * id: number; id eg: 1
 * model: string; 车型 eg: 718 Boxster
 * modelCode: string; eg: 95BAU1
 * modelYear: string; 年款
 * imageUrl: string; 图片地址
 * status: number; 状态 0: 空闲中, 1: 试乘中, 2: 试驾中
 * bodyColor: string; 车身颜色
 * topColor: string; 车顶颜色
 * innerColor: string; 内饰
 * displacement: number; 排气
 * porscheCode: string; 保时捷代码
 * customerName?: string; 客户姓名(已预定/使用中)
 * bpId?: string; bpId;
 * latestUsableTime?: number; 最快可用时间
 */

export const carInfoListData = [
    {
        id: 4248,
        model: 'Macan',
        modelYear: '2023',
        modelCode: '95BAU1',
        status: 0,
        imageUrl: 'https://cdn.images.slfinpub.aws.porsche.cloud/4c1a5af2-c950-4b77-9a52-4cd0dfc6c28a/320x180',
        bodyColor: '赤铜矿金属漆',
        topColor: '赤铜矿金属漆',
        innerColor: '标准颜色黑色内饰',
        displacement: 1984,
        porscheCode:'PPGXUL51'
    },
    {
        id: 4300,
        model: 'Cayenne Coupé 铂金版',
        modelYear: '2023',
        modelCode: '9YBDA1',
        status: 1,
        imageUrl: 'https://cdn.images.slfinpub.aws.porsche.cloud/86d59018-6efc-4a44-b2a7-322335e2c310/320x180',
        bodyColor: '月光蓝金属漆',
        topColor: '月光蓝金属漆',
        innerColor: '黑色 - 波尔多红双色调光面真皮内饰',
        displacement: 2995,
        porscheCode:'PPLRT1N9',
        customerName: '张书巧',
        bpId: '6002455555',
        latestUsableTime: 1700990836449,
    },
    {
        id: 4812,
        model: 'Taycan',
        modelYear: '2023',
        modelCode: 'Y1AAA1',
        status: 2,
        imageUrl: 'https://cdn.images.slfinpub.aws.porsche.cloud/4c1a5af2-c950-4b77-9a52-4cd0dfc6c28a/320x180',
        bodyColor: '凌空灰金属漆',
        topColor: '凌空灰金属漆',
        innerColor: '双色调真皮内饰，光面真皮，黑色/波尔多红',
        displacement: 0,
        porscheCode:'PPLRT1N9',
        customerName: '朱潇鹏',
        bpId: '6002455559',
        latestUsableTime: 1700990936449,
    },
]