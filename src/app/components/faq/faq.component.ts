import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  questions: { question: string; answer: string; expanded: boolean }[] = [
    {
      question: 'What is Ayurveda Compass?',
      answer: 'Ayurveda Compass is a wellness app that combines Ayurvedic principles with modern tech to offer personalized health advice, tailored to your unique body type (dosha), including diet, yoga, and lifestyle recommendations.',
      expanded: false
    },
    {
      question: 'What devices does the app support?',
      answer: 'The app is currently available for web browsers and is being optimized for both iOS and Android devices. A dedicated mobile app is in development.',
      expanded: false
    },
    {
      question: 'Do I need a subscription to use the app?',
      answer: 'The app offers both free and premium features. While basic functionality is free, a subscription unlocks advanced features like personalized recommendations and progress tracking.',
      expanded: false
    },
    {
      question: 'Can I use the app if I\'m new to Ayurveda?',
      answer: 'Absolutely! The app is designed for both beginners and experienced users. It provides easy-to-understand guidance and tools to help you learn and apply Ayurvedic principles to your lifestyle.',
      expanded: false
    }
  ];

  toggleAnswer(index: number): void {
    // Toggle the expanded state for the clicked question
    this.questions[index].expanded = !this.questions[index].expanded;

    // Collapse all other questions
    this.questions.forEach((question, i) => {
      if (i !== index) {
        question.expanded = false;
      }
    });
  }
}