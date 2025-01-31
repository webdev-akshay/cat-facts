import { Component, OnInit } from '@angular/core';
import { CatService } from '../../service/cat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat',
  imports: [CommonModule],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.scss'
})
export class CatComponent implements OnInit {
  catFacts:any[]=[];
  constructor(private catService:CatService){}

  getCatFacts(){
    this.catService.getCatFacts().subscribe((data:any)=>{
      console.log(data)
    })
  }
  ngOnInit(): void {
      this.getCatFacts()
  }

}
