import { of, Observable } from 'rxjs';

export const names: Observable<String[]> = of(['James', 'Susan', 'Charles']);

names.subscribe((o) => {
  o.map((s) => {
    console.log(s);
  });
});


