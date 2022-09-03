import { Observable, of } from "rxjs";
// class PagedData<T> {
//     data: T[] | undefined;
//   }
 export interface Employee {
    id:string; 
    name: string;
    gender: string;
    company: string;

 }

export class DataService{
  
    
    // getData(pageNumber:number, pageSize:number):Observable<PagedData<Employee>>[] {
    getData(pageNumber:number, pageSize:number):Employee[] {
        return this.data.slice(pageNumber*pageSize, (pageNumber+1)*pageSize);
        // return of(this.data.slice(pageNumber*pageSize, (pageNumber+1)*pageSize)).pipe(
        //     delay(new Date(Date.now() + 500)),
        //     map(d => ({ data: d }))
        //       );
    }
    addData(employee: Employee){
        
        this.data.push(employee);
    }
    getRows(){
        return [
          {
            media_id:57575,
            media_name:'jaws',
            media_poster:{
              src:"/assets/jaws.jpg"
            }
          },
          {
            media_id:57576,
            media_name:'solo',
            media_poster:{
              src:"/assets/solo.jpg"
            }
          },
          {
            media_id:57577,
            media_name:'star wars',
            media_poster:{
              src:"/assets/star_wars.jpg"
            }
          },
          {
            media_id:57578,
            media_name:'spider man',
            media_poster:{
              src:"/assets/spider_man.jpg"
            }
          },
          {
            media_id:57579,
            media_name:'assassin',
            media_poster:{
              src:"/assets/assassin.jpg"
            }
          },
    
        ]
      }
    

    private data: Employee[] = [ 
        {id:'w01', name: 'Austin', gender: 'Male', company: 'Sw0imlane' },
        {id:'w02', name: 'Dany', gender: 'Male', company: 'KFC' },
        {id:'w03', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w04', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w05', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w06', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w07', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w08', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w09', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w10', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w11', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w12', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w13', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w14', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w15', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w16', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w17', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w18', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w19', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w20', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w21', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w22', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w23', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w24', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w25', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w26', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w27', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w28', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w29', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w30', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w31', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w32', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w33', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w34', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w35', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w36', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w37', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w38', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w39', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w40', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w41', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w42', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w43', name: 'Molly', gender: 'Female', company: 'Burger King' },
        {id:'w44', name: 'John', gender: 'Male', company: 'Burger King' },
        {id:'w45', name: 'Janetta', gender: 'Female', company: 'Burger King' },
        {id:'w46', name: 'Rob', gender: 'Male', company: 'Burger King' },
    ];
}