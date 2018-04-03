import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sections: any = [];

  constructor(private sectionsService: SectionsService) { }

  ngOnInit() {
    // Retrieve sections from the API
    this.sectionsService.getAllSections().subscribe(sections => {
        this.sections = sections;
    });
  }

}
