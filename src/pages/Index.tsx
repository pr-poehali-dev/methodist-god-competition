
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Шапка сайта */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Конкурс "Методист года"</h1>
          <p className="text-lg font-medium">Дошкольная образовательная организация</p>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto py-8 px-4">
        {/* Профиль методиста */}
        <section className="mb-10">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-200">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                  <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256" alt="Фото методиста" />
                  <AvatarFallback>ММ</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <CardTitle className="text-3xl font-bold">Иванова Мария Ивановна</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Методист высшей квалификационной категории
                  </CardDescription>
                  <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Icon name="Mail" size={16} />
                      ivanova@example.com
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Icon name="Phone" size={16} />
                      +7 (999) 123-45-67
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-blue-700 mb-2">Профессиональные данные</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Icon name="GraduationCap" className="text-blue-600 mt-1" size={18} />
                        <span>Высшее педагогическое образование, 2005 г.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Clock" className="text-blue-600 mt-1" size={18} />
                        <span>Стаж методической работы: 15 лет</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Award" className="text-blue-600 mt-1" size={18} />
                        <span>Почетный работник дошкольного образования</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-700 mb-2">Профессиональное кредо</h3>
                    <div className="bg-blue-50 p-4 rounded-md italic text-gray-700 border-l-4 border-blue-400">
                      "Каждый ребенок – это целый мир. Моя задача – помочь педагогам открыть этот мир и дать возможность ребенку в полной мере раскрыть свой потенциал"
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Вкладки портфолио */}
        <section>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="general" className="text-base">Общие сведения</TabsTrigger>
              <TabsTrigger value="monitoring" className="text-base">Мониторинг деятельности</TabsTrigger>
              <TabsTrigger value="scientific" className="text-base">Научно-педагогическая работа</TabsTrigger>
            </TabsList>

            {/* Вкладка: Общие сведения */}
            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Общие сведения о методисте</CardTitle>
                  <CardDescription>Базовая информация о профессиональном пути и достижениях</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Образование</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <ul className="space-y-4">
                        <li>
                          <div className="font-medium">Педагогический университет им. А.И. Герцена</div>
                          <div className="text-sm text-gray-600">2000-2005 гг.</div>
                          <div>Специальность: Дошкольная педагогика и психология</div>
                          <div>Квалификация: Преподаватель дошкольной педагогики и психологии</div>
                        </li>
                        <li>
                          <div className="font-medium">Институт развития образования</div>
                          <div className="text-sm text-gray-600">2015 г.</div>
                          <div>Профессиональная переподготовка: Менеджмент в образовании</div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Профессиональный путь</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <strong>Старший воспитатель</strong>
                          <span className="text-gray-600">2005-2010 гг.</span>
                        </div>
                        <p>МДОУ "Солнышко", г. Казань</p>
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between pt-2 border-t">
                          <strong>Методист</strong>
                          <span className="text-gray-600">2010-2018 гг.</span>
                        </div>
                        <p>МДОУ "Росинка", г. Казань</p>
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between pt-2 border-t">
                          <strong>Старший методист</strong>
                          <span className="text-gray-600">2018 г. - настоящее время</span>
                        </div>
                        <p>МДОУ "Звездочка", г. Казань</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Повышение квалификации</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <ul className="space-y-3">
                        <li className="pb-2 border-b">
                          <div className="font-medium">Современные технологии дошкольного образования</div>
                          <div className="text-sm text-gray-600">2022 г., 72 часа</div>
                        </li>
                        <li className="pb-2 border-b">
                          <div className="font-medium">Инновационные подходы к организации методической работы в ДОУ</div>
                          <div className="text-sm text-gray-600">2021 г., 108 часов</div>
                        </li>
                        <li>
                          <div className="font-medium">Цифровые технологии в дошкольном образовании</div>
                          <div className="text-sm text-gray-600">2020 г., 36 часов</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Вкладка: Мониторинг деятельности */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Мониторинг педагогической деятельности</CardTitle>
                  <CardDescription>Анализ и оценка педагогической работы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Достижения воспитанников ДОУ</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr className="bg-blue-100">
                              <th className="py-2 px-4 border">Показатель</th>
                              <th className="py-2 px-4 border">2020 г.</th>
                              <th className="py-2 px-4 border">2021 г.</th>
                              <th className="py-2 px-4 border">2022 г.</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="py-2 px-4 border">Участие в конкурсах</td>
                              <td className="py-2 px-4 border text-center">37%</td>
                              <td className="py-2 px-4 border text-center">45%</td>
                              <td className="py-2 px-4 border text-center">58%</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 border">Победители и призеры</td>
                              <td className="py-2 px-4 border text-center">18%</td>
                              <td className="py-2 px-4 border text-center">25%</td>
                              <td className="py-2 px-4 border text-center">32%</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 border">Уровень готовности к школе</td>
                              <td className="py-2 px-4 border text-center">78%</td>
                              <td className="py-2 px-4 border text-center">82%</td>
                              <td className="py-2 px-4 border text-center">89%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Профессиональный рост педагогов</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Квалификационные категории педагогов</h4>
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                              <span className="w-40">Высшая категория:</span>
                              <div className="flex-1 bg-gray-200 rounded h-4">
                                <div className="bg-blue-600 h-4 rounded" style={{ width: '40%' }}></div>
                              </div>
                              <span className="ml-2">40%</span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-40">Первая категория:</span>
                              <div className="flex-1 bg-gray-200 rounded h-4">
                                <div className="bg-blue-500 h-4 rounded" style={{ width: '35%' }}></div>
                              </div>
                              <span className="ml-2">35%</span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-40">Без категории:</span>
                              <div className="flex-1 bg-gray-200 rounded h-4">
                                <div className="bg-blue-400 h-4 rounded" style={{ width: '25%' }}></div>
                              </div>
                              <span className="ml-2">25%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Результаты методической работы</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Аттестация педагогов: 8 человек повысили квалификационную категорию за последние 3 года</li>
                        <li>Проведено 26 открытых занятий для обмена педагогическим опытом</li>
                        <li>Организовано 12 семинаров по внедрению инновационных технологий</li>
                        <li>Участие педагогов в профессиональных конкурсах выросло на 34%</li>
                        <li>Опубликовано 17 методических разработок педагогов ДОУ</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Вкладка: Научно-педагогическая работа */}
            <TabsContent value="scientific" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Научно-педагогическая деятельность</CardTitle>
                  <CardDescription>Исследовательская работа и методические разработки</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Научно-методические публикации</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <ul className="space-y-3">
                        <li className="pb-2 border-b">
                          <div className="font-medium">"Формирование предпосылок функциональной грамотности у старших дошкольников"</div>
                          <div className="text-sm text-gray-600">Журнал "Дошкольное воспитание", №5, 2022 г.</div>
                        </li>
                        <li className="pb-2 border-b">
                          <div className="font-medium">"Инновационные подходы к организации экологического воспитания в ДОУ"</div>
                          <div className="text-sm text-gray-600">Сборник материалов Всероссийской конференции, 2021 г.</div>
                        </li>
                        <li>
                          <div className="font-medium">"Модель внутренней системы оценки качества образования в ДОУ"</div>
                          <div className="text-sm text-gray-600">Научно-методический журнал "Управление ДОУ", №3, 2020 г.</div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Выступления на конференциях</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Международная научно-практическая конференция "Современное дошкольное образование"</h4>
                          <p className="text-sm text-gray-600 mt-1">г. Москва, 2022 г.</p>
                          <p className="mt-2">Доклад: "Цифровая трансформация методической службы ДОУ"</p>
                        </div>
                        <div className="pt-3 border-t">
                          <h4 className="font-medium">Республиканский педагогический форум</h4>
                          <p className="text-sm text-gray-600 mt-1">г. Казань, 2021 г.</p>
                          <p className="mt-2">Выступление: "Проектная деятельность как средство развития исследовательских навыков дошкольников"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Методические разработки и пособия</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Icon name="BookOpen" className="text-blue-600 mt-1" size={18} />
                          <div>
                            <div className="font-medium">Методическое пособие "Интерактивные формы работы с педагогами ДОУ"</div>
                            <p className="text-sm">Рекомендовано методическим объединением дошкольных работников республики, 2022 г.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="BookOpen" className="text-blue-600 mt-1" size={18} />
                          <div>
                            <div className="font-medium">Сборник дидактических игр "Познавательное развитие детей 5-7 лет"</div>
                            <p className="text-sm">Используется в 15 ДОУ региона</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="BookOpen" className="text-blue-600 mt-1" size={18} />
                          <div>
                            <div className="font-medium">Программа "Наставничество в ДОУ: от теории к практике"</div>
                            <p className="text-sm">Внедрена в систему методической работы ДОУ с 2020 г.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023-2024 Конкурс "Методист года дошкольной организации"</p>
          <p className="mt-2 text-gray-400 text-sm">Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
