import { createContainer, asFunction, asValue } from 'awilix'
import { ProductRepository } from '../Data/Repository/ProductRepository'
import { GetProductUseCase } from '../Domain/UseCase/Product/GetProduct';
import { GetProductsUseCase } from '../Domain/UseCase/Product/GetProducts';
import { CreateProductUseCase } from '../Domain/UseCase/Product/CreateProduct';
import { UpdateProductUseCase } from '../Domain/UseCase/Product/UpdateProduct';
import { DeleteProductUseCase } from '../Domain/UseCase/Product/DeleteProduct';
import ProductDetailViewModel from '../Presentation/Views/Product/Detail/ViewModel';
import ProductListViewModel from '../Presentation/Views/Product/List/ViewModel';
import CalculatorViewModel from '../Presentation/Views/Product/Calculator/ViewModel';
import LongCalcViewModel from '../Presentation/Views/Product/LongCalc/LongCalcViewModel';
import ProductNewViewModel from '../Presentation/Views/Product/New/ViewModel';

import * as ProductLocalStorageDataSource from '../Data/DataSource/ProductLocalStorageDataSource'

const container = createContainer();
//function createSharedState() {
//  let state = {};
//  return {
//    getState: () => state,
//    setState: (newState) => {
//      state = { ...state, ...newState };
//    }
//  };
//}
//container.register({
//  sharedState: asFunction(createSharedState).singleton()
//});

container.register({
    ProductRepository: asFunction(ProductRepository),
    ProductDataSource: asValue(ProductLocalStorageDataSource),
    GetProductUseCase: asFunction(GetProductUseCase),
    GetProductsUseCase: asFunction(GetProductsUseCase),
    CreateProductUseCase: asFunction(CreateProductUseCase),
    UpdateProductUseCase: asFunction(UpdateProductUseCase),
    DeleteProductUseCase: asFunction(DeleteProductUseCase),
    ProductDetailViewModel: asFunction(ProductDetailViewModel),
    ProductListViewModel: asFunction(ProductListViewModel),
    ProductNewViewModel: asFunction(ProductNewViewModel),
    CalculatorViewModel: asFunction(CalculatorViewModel),
    LongCalcViewModel: asFunction(LongCalcViewModel),

})

export default container