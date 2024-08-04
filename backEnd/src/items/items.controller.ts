import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ItemsService } from './items.service';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiQuery({ name: 'offset', required: false, type: Number, description: 'Number of items to skip' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items to fetch' })
  getItems(@Query('offset') offset: number = 0, @Query('limit') limit: number = 10) {
    return this.itemsService.getItems(offset, limit);
  }
}
