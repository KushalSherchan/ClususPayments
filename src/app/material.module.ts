import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule,
    MatTabsModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatInputModule
  ],
  exports: [MatButtonModule, MatCardModule, MatFormFieldModule,
    MatTabsModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatInputModule
  ]
})

export class MaterialModule {}
