from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    # return render(request, 'polls/detail.html', {'poll': p})
    html = "<html><body>Ahoj.</body></html>"
    return HttpResponse(html)