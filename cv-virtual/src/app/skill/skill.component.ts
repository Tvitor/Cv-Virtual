import { SkillDataService } from './skill-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillList: any[];
  constructor(private _skillService: SkillDataService) { }

  ngOnInit() {
    this._skillService.buscarTodos()
      .subscribe(skills => {
        this.skillList = skills;
      });
  }

}
