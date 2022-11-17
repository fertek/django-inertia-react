from inertia import render


def home(request):
    return render(
        request,
        "Events/Index",
        props={
            "events": [
                "Python Web Conference 2022",
                "FlaskCon 2021",
                "DjangoCon Europe 2022",
            ],
        },
    )

def contact(request):
    return render(
        request,
        "Contact",
        props={
            "supportEmail": "support@example.com"
        },
    )
