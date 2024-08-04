import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private items = Array.from({ length: 1000 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` , date : Date.now() }));

  getItems(offset: number, limit: number) {
    const offsetNum = Number(offset);
    const limitNum = Number(limit);

    const result = offsetNum + limitNum;
    const data = this.items.slice(offset, result);
    return {
      data,
      total: this.items.length,
    };
  }
}
