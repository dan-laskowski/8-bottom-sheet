import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './draggable-bottom-sheet.component.html',
  styleUrl: './draggable-bottom-sheet.component.css',
})
export class BottomSheetComponent {
  isBottomSheetVisible: boolean = true;

  toggleBottomSheet() {
    this.isBottomSheetVisible = !this.isBottomSheetVisible;
  }
}
