from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Customer
import json
from django.views.decorators.csrf import csrf_exempt

def home(request):
    return render(request, 'core/home.html')

@csrf_exempt
def products_list(request):
    if request.method == 'POST':
        body = json.loads(request.body)

        product = Product.objects.create(
            name=body['name'],
            price=body['price'],
        )

        return JsonResponse({
            'id': product.id,
            'name': product.name,
            'price': str(product.price),
        }, status=201)

    products = Product.objects.all()

    data = []

    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': str(product.price),
        },)

    return JsonResponse(data, safe=False)

@csrf_exempt
def customers_list(request):
    if request.method == 'POST':
        body = json.loads(request.body)

        customer = Customer.objects.create(
            name=body['name'],
            email=body['email'],
            phone=body['phone'],
        )

        return JsonResponse({
            'id': customer.id,
            'name': customer.name,
            'email': customer.email,
            'phone': str(customer.phone),
        }, status=201)

    customers = Customer.objects.all()

    data = []

    for customer in customers:
        data.append({
            'id': customer.id,
            'name': customer.name,
            'email': customer.email,
            'phone': str(customer.phone),
        })

    return JsonResponse(data, safe=False)







