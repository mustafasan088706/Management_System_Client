import{Injectable} from'@angular/core'

@Injectable({
    providedIn:'root'
})

export class dashboardService{
    constructor(){}

    bigChart(){
        return[
            {
                name:'Test1',
                data:[106,107,111,133,221,767,1766]
            },
            {
                name:'Test2',
                data:[106,107,150,133,2000,100,1766]
            },
            {
                name:'Test3',
                data:[106,107,111,435,221,767,658]
            },
            {
                name:'Test4',
                data:[106,107,111,1200,1000,767,1766]
            },
            {
                name:'Test5',
                data:[30,107,111,75,221,650,50]
            },

        ]
    }

    cards(){
        return[15,20,35,40]
    }

    cards2(){
        return[50,85,107,958,110,205,45,389,452,2015]
    }

    cards3(){
        return[20,40,60,80,100]
    }

    cards4(){
        return[50,100,150,200,5000,15000]
    }

    pie(){
        return[{
            name: 'Test Value1',
            y: 57.67,
            sliced: true,
            selected: true
          }, {
            name: 'Test Value2',
            y: 12.77
          }, {
            name: 'Test Value3',
            y: 4.98
          }, {
            name: 'Test Value4',
            y: 2.63
          }, {
            name: 'Test Value5',
            y: 1.53
          }, {
            name: 'Test Value6',
            y: 1.40
          }, {
            name: 'Test Value7',
            y: 0.84
          }, {
            name: 'Test Value8',
            y: 22.51
          }, {
            name: 'Other',
            y: 2.6
          }]
    }
}