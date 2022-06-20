import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public questions: Question[] = [];

  public currentQuestion: number = 0;
  public form!: FormGroup;
  public requiredError: boolean = false;
  public showResults: boolean = false;
  public introvertScore: number = 0;

  constructor(
    private questionService: QuestionService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      answer: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.questionService.get5Questions().subscribe((data: Question[]) => {
      this.questions = data;

    });
  }

  public submit(): void {
    const val = this.form.value.answer;

    if (!val) {
      this.requiredError = true;
      return;
    }

    // Process result
    this.introvertScore += parseInt(val);

    // Go to results if this is the last question
    if (this.currentQuestion === this.questions.length - 1) {
      this.showResults = true;
    }

    // Reset form and go to next question
    this.currentQuestion++;
    this.requiredError = false;
    this.form.reset();
  }
}
